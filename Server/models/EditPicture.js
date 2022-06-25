const supabase = require('../configs/connection');

async function editPicture(info, userName, Path, model) {
    try {
        const {data, error} = await supabase
            .from('Pictures')
            .update([
                {Info: info, username: userName, /*created_at: date,*/ Image: Path},
            ])
            .eq('Model_ID', model);
        if (error) throw error
        return data
    } catch (e) {
        throw e
    }
}

module.exports = {
    editPicture
};