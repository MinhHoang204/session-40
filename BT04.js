const keys = Object.keys(localStorage);
keys.forEach(key => {
    const value = localStorage.getItem(key);
    console.log(`Key: ${key}, Value: ${value}`);
});

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); 
    const value = localStorage.getItem(key); 
    console.log(`${key}: ${value}`);
}