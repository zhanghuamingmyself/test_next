// pages/api/user/[id].js
export default function handler(req, res) {
    const {query: {id}, method} = req;
    // res.status(200).json({userId: id, message: `用户 ID 是 ${id}`});
    console.log(req)
    switch (method) {
        case 'GET':
            // 获取特定用户的信息
            res.status(200).json({id, name: "John Doe"});
            break;
        case 'PUT':
            // 更新特定用户的信息
            res.status(200).json({id, name: "John Doe Updated"});
            break;
        case 'POST':
            // 更新特定用户的信息
            res.status(200).json({id, name: req.body});
            break;
        case 'DELETE':
            // 删除特定用户
            res.status(200).json({message: `User ${id} deleted.`});
            break;
        default:
            // 不支持其他方法
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
