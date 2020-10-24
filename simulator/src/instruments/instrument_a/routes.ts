
import {Request, Response} from 'express';
import {InstrumentAcontroller} from './instrumentaController'
const instrumentA = new InstrumentAcontroller();
export default [

  {
    path: '/',
    method: 'get',
    handler: [async (req: Request, res: Response) => {
      res.status(200).send('Instrument simulator is running');
    }]
  },

  {
    path: '/instrument/a/procedure/start',
    method: 'post',
    handler: [async (req: Request, res: Response) => {
      await instrumentA.startProcedure(req.body.secondsToRun);
      res.status(200)
          .send('started procedure');
    }]
  },

  {
    path: '/instrument/a/procedure/stop',
    method: 'post',
    handler: [async (req: Request, res: Response) => {
      await instrumentA.stopProcedure();
      res.status(200)
          .send('stopped procedure');
    }]
  },

  {
    path: '/instrument/a/connection/status',
    method: 'get',
    handler: [async (req: Request, res: Response) => {
      const status = await instrumentA.connectionStatus();
      if(status) res.status(200).send('connected');
      else res.status(200).send('disconnected');
    }]
  },

  {
    path: '/instrument/a/service/status',
    method: 'get',
    handler: [async (req: Request, res: Response) => {
      const status = await instrumentA.getStatus();
      res.status(200).send('procedure status: ' + status);
    }]
  },

  {
    path: '/instrument/a/connection/connect',
    method: 'post',
    handler: [async (req: Request, res: Response) => {
      const status = await instrumentA.connect(req.body.status);
      if (status) res.status(200).send('connected');
      else res.status(200).send('disconnected');
    }]
  },

  {
    path: '/instrument/a/countdown',
    method: 'get',
    handler: [async (req: Request, res: Response) => {
      const timeLeft = await instrumentA.getRemainingTime();
      res.status(200).send('Left ' + timeLeft + ' seconds');
    }]
  },

  {
    path: '/instrument/a/generate/random',
    method: 'get',
    handler: [async (req: Request, res: Response) => {
      const data = await instrumentA.generateRandom();
      res.status(200).send('Data generated ' + data);
    }]
  }
];
