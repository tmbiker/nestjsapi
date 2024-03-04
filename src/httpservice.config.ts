import { Injectable } from "@nestjs/common";
import { HttpModuleOptions, HttpModuleOptionsFactory} from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions | Promise<HttpModuleOptions> {
        return {
            headers: {
                'Authorization': 'Bearer EAAO9QeAJXsUBOwImkp63KsXmfuXA2QJXt28yOTOzZB55MBAVPK7c7sr6VCjHkTgEEGmPpFlU4LsrwW5ZAg8b1xob8zvbouzzkyqeCG0ZCfV3688KON8iFQ8kcmqf1qeli4uloZAOjwMSqJxPYG9aHDe1ZCojqmZCnu89M6HT3aomymZCt5vxqp9TCQZAqtBnfo3nztZAC4KVSXZCfeIM5iuCe2dDM7XRMwq2ZBY',
                'Content-Type': 'application/json'
            }
        }
    }
}
