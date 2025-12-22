// data/wolfData.js

window.wolfColors = [
    { name: "曜石黑", hex: "#2c2c2c" },
    { name: "月光白", hex: "#f0f0f0" },
    { name: "石榴紅", hex: "#e74c3c" },
    { name: "琥珀橙", hex: "#e67e22" },
    { name: "黃水晶", hex: "#f1c40f" },
    { name: "翡翠綠", hex: "#2ecc71" },
    { name: "天河藍", hex: "#3498db" },
    { name: "紫水晶", hex: "#9b59b6" },
    { name: "粉晶",   hex: "#fda7df" },
    { name: "孔雀綠", hex: "#16a085" }
];

// 定義部位與款式 (這裡對應檔名後綴，例如 hat_1, hat_2...)
window.wolfParts = {
    hat:    { label: "頭飾", count: 6 }, // 1~6
    top:    { label: "上衣", count: 6 },
    bottom: { label: "下著", count: 6 },
    shoes:  { label: "鞋子", count: 6 },
    float:  { label: "心情", count: 6, names: ["愛心", "驚嘆", "星星", "微笑", "睡臉", "SOS"] }
};

// 計算總組合數 (用於除錯)
console.log("小狼配件系統已載入");
