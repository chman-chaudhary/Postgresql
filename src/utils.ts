import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://Test_owner:YGCwyad4sk8M@ep-morning-base-a1luebhj.ap-southeast-1.aws.neon.tech/Test?sslmode=require");
    await client.connect();
    return client;
}