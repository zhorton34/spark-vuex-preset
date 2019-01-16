export default {
    
    methods: {
        formattedDate()
        {
            return `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}`;
        }
    
    }
}