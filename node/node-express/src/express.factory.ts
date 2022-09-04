import express from 'express';
import * as Logger from 'bunyan';

export class ExpressFactory {
    private app: express.Application;

    constructor(private logger: Logger) {
        this.app = express();
    }

    public startServer(): void {
        this.configure();
        this.registerRoutes();
        this.listen();
    }

    private configure(): void {
        // app.use cors, compression, middleware
    }

    private registerRoutes(): void {
        this.app.get('/api/users', (req, res) => {
            const data: string[] = ['user1', 'user2', 'user3'];
            res.json(data);
        });
    }

    private listen(): express.Application {
        this.app.listen(8080, () => {
            this.logger.info('web service running on port 8080');
        });

        return this.app;
    }
}
