# project Structure
<p>
The project is an application that shows me road conditions in Palestine, specifically the West Bank.
</p>

## DataBase
<p>
we will be use PostgreSQL and will use ORM for more secure Prisma
</p>

### table 1 (users)

```
username: string
email: string (primary key)
password_hash: string
created_at: datetime
```

### table 2 (roads)
```
id: integer (primary key)
name: string
latitude: float
longitude: float
status: open | closed | traffic
updated_at: datetime
```

### table 3 (road_reports)
```
email: string
road_id: int
status: open | closed | traffic
description: string
created_at: datetime
```