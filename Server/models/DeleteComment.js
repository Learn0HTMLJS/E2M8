const supabase = require('../configs/connection');

async function deleteComment(ID) {
    try {
        let {data, error} = await supabase
            .from('Comments')
            .delete()
            .eq('model_id', ID);
//        console.log(data);    
        if (error) throw error
        return await data;
    } catch (e) {
        throw e
    }
}

module.exports = {
    deleteComment
};