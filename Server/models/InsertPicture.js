const supabase = require('../configs/connection');

async function insertPicture(info, userName, Path, model) {
    try {
        const date = now();
        const {data, error} = await supabase
            .from('Pictures')
            .insert([
                {Info: info, username: userName, created_at: date, Image: Path,
                Model_ID: model},
            ]);
        if (error) throw error
        return data
    } catch (e) {
        throw e
    }
}

module.exports = {
    insertPicture
};