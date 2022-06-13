const supabase = require('../configs/connection'); 

async function insertComment(Model_id, text) {
    try {
        let {data, error} = await supabase
            .from('Comments')
            .insert([
                {model_id: Model_id, comment: text},
            ]);
        //console.log(data);    
        if (error) return error;
        return data;
    } catch (e) {
        return false;
    }
}

module.exports = {
    insertComment
};