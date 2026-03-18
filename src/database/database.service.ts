import {Pool} from "pg";

class DatabaseService {
    private pool: Pool;
    private user:string;
    private host:string;
    private database:string;
    private password:string;
    private port:number;

    constructor() {
        this.user='huseen'
        this.host='localhost'
        this.database='database'
        this.password='password'
        this.port=2000
        this.pool = new Pool({
            user: this.user,
            host: this.host,
            database: this.database,
            password: this.password,
            port: this.port,
        });
    }

    // لاختبار الاتصال عند تشغيل التطبيق
    async testConnection(): Promise<void> {
        try {
            const client = await this.pool.query(`SELECT NOW()`);
            console.log('✅ PostgreSQL connected successfully!');
            console.log(client.rows[0].now)
        } catch (error) {
            console.error('❌ PostgreSQL connection failed:', error);
            throw error;
        }
    }
    async query(text: string, params?: any[]) {
        return this.pool.query(text, params);
    }
}

export default DatabaseService;