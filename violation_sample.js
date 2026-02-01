const db = require('mysql'); // 违反分层规则：UI/Controller直接引用DB

class UserAdmin {
    constructor() {
        this.apiKey = "sk-1234567890abcdef"; // 违反规则：硬编码密钥
        this.instance = new UserAdmin(); // 违反规则：错误的单例实现逻辑
    }
    
    getData() {
        return db.query("SELECT * FROM users");
    }
}

// 模拟循环依赖倾向
import { Helper } from "../../../utils/helper"; 

interface SuperFatInterface {
    task1(): void;
    task2(): void;
    // ... 假设这里有500行代码 ...
    task999(): void;
}
