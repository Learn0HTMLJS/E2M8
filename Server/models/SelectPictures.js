const supabase = require('../configs/connection');

async function selectPicture(Picture_ID) {
    try {
        let { data, error } = await supabase
            .from('Pictures')
            .select('Image')
            .eq('Model_ID', Picture_ID)            
        if (error) throw error
        return data
    } catch (e) {
        throw e
    }
}

module.exports = {
    selectPicture
};