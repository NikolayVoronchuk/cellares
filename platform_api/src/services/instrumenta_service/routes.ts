import {Request, Response} from 'express';
import {IAcontroller} from './instrumentaController';

const aController = new IAcontroller();

export default [
    {
        path: '/',
        method: 'get',
        handler: [async (req: Request, res: Response) => {
            res.status(200).send('Platform API is running');
        }]
    },

    {
        path: '/instrument/connect',
        method: 'post',
        handler: [async (req: Request, res: Response) => {
            const result = await aController.connectToInstrument(req.body.connect);
            res.status(200).send({data:result.data});
        }]
    },

    {
        path: '/instrument/procedure/engage',
        method: 'post',
        handler: [async (req: Request, res: Response) => {
            const result = await aController.controlProcedureOnInstrument(req.body.status, req.body.seconds);
            res.status(200).send({data:result.data});
        }]
    },

    {
        path: '/instrument/isconnected',
        method: 'get',
        handler: [async (req: Request, res: Response) => {
            const result = await aController.isConnected();
            res.status(200).send({data:result.data});
        }]
    },

    {
        path: '/procedure/isrunning',
        method: 'get',
        handler: [async (req: Request, res: Response) => {
            const result = await aController.isProcedureRunning();
            res.status(200).send({data:result.data});
        }]
    },

    {
        path: '/procedure/timeleft',
        method: 'get',
        handler: [async (req: Request, res: Response) => {
            const result = await aController.getTimeLeft();
            res.status(200).send({data:result.data});
        }]
    },

    {
        path: '/instrument/getdata',
        method: 'get',
        handler: [async (req: Request, res: Response) => {
            const result = await aController.getData();
            res.status(200).send({data:result.data});
        }]
    }
];
