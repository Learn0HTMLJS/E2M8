const supabase = require('../configs/connection');

async function deleteModel(ID) {
    try {
        let {data, error} = await supabase
            .from('Models')
            .delete()
            .eq('id', ID);
//        console.log(data);    
        if (error) throw error
        return await data;
    } catch (e) {
        throw e
    }
}

module.exports = {
    deleteModel
};