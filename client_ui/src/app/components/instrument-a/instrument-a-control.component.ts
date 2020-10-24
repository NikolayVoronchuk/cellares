import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiHttpService} from "../../services/api-http.service";
import {interval, Subject} from "rxjs";
import {startWith, switchMap, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-instrument-a',
  templateUrl: './instrument-a-control.component.html',
  styleUrls: ['./instrument-a-control.component.scss']
})
export class InstrumentAControlComponent {
  connectionStatus = 'disconnected';
  procedureStatus = 'procedure status: stopped';
  timeLeft;
  secondsToRun = 10;
  generatedData;
  private stopPolling = new Subject();

  constructor(private httpClient: ApiHttpService) {}

  onStartClick(seconds: string) {
    this.stopPolling.next();
    this.httpClient.startProcedure(Number(seconds)).subscribe();
    this.httpClient.getProcedureStatus().subscribe(res => this.procedureStatus = res.data);
    interval(500)
      .pipe(startWith(0), switchMap(() => this.httpClient.getDurationTimeLeft()), takeUntil(this.stopPolling))
      .subscribe(res => this.timeLeft = res.data);
    interval(1000)
      .pipe(startWith(0), switchMap(() => this.httpClient.getData()), takeUntil(this.stopPolling))
      .subscribe(res => this.generatedData = res.data);
  }

  onStopClick() {
    this.httpClient.stopProcedure().subscribe();
    this.httpClient.getProcedureStatus().subscribe(res => this.procedureStatus = res.data);
    this.httpClient.getDurationTimeLeft().subscribe(res => this.timeLeft = res.data);
    this.generatedData = '';
    this.stopPolling.next();
  }

  onConnectClick() {
    if(this.connectionStatus === 'disconnected') {
      this.httpClient.connect(true).subscribe();
    } else {
      this.httpClient.connect(false).subscribe();
    }
    this.httpClient.getConnectionStatus().subscribe(res => this.connectionStatus = res.data);
  }
}
