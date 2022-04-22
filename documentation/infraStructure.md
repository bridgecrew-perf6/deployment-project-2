## Udagram Infrastructure

![Architecture](architecture.png)

### AWS Services used
#### RDS Postgres
The application server uses AWS RDS Postgres as database for storing and retrieving information.

Database URI: `postgresql://postgres:postgres@database-1.cdsx9nzb8wez.us-east-1.rds.amazonaws.com/postgres`

#### Elastic Beanstalk(EB)
The application server is deployed on AWS Elastic Beanstalk service. The application is built, archived and uploaded
to and S3 bucket from where Elastic Beanstalk extracts and runs the application on an endpoint.

EB URL: `http://Udagramapi1-env.eba-mr6rbykc.us-east-1.elasticbeanstalk.com`

#### S3 Bucket
The frontend application is deployed using AWS S3 Bucket. The bundled assets are uploaded to an S3 bucket and that
bucket is made publicly readable.

Bucket URL: `http://static-udagram.s3-website-us-east-1.amazonaws.com`

End users can access the application from the Bucket URL.
