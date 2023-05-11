
export const getDaysSince = (
    date: string | Date,
) => {
    const _date = typeof date === 'string' ? new Date(date) : date;
    const today = new Date()
    const diff = Math.abs(_date.getTime() - today.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24))
}
