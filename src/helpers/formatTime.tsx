function formatTime(time:string) {
    const date = new Date(time);
    
    date.setHours(date.getHours() + 7);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    
    const formatted = `${yyyy}/${mm}/${dd} ${hh}:${min}`;
    return formatted
}

module.exports = formatTime