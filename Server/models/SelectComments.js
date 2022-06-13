const supabase = require('../configs/connection');

async function selectComments(Model_ID) {
    try {
        let { data, error } = await supabase
            .from('Comments')
            .select('*')
            .eq('model_id', Model_ID)            
        if (error) throw error
        return data
    } catch (e) {
        throw e
    }
}

module.exports = {
    selectComments
};