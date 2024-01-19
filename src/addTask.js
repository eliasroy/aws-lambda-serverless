const {v4} =require('uuid')
const AWS=require('aws-sdk')
const create=async(event)=>{
    const dynamodb=new AWS.DynamoDB.DocumentClient()

    const {title, description}=JSON.parse(event.body)
    const createAt=new Date()
    const id=v4()
    const task={
        id,
        title,
        description,
        createAt
    }

    await dynamodb.put({
      TableName:'TaskTable',
      Item:{
          task
      }
    }).promise()

    return {
        status:200,
        body:JSON.stringify(task)
    }

};

module.exports={
    create
};