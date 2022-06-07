const supabase = require('../configs/connection');

async function selectModel(ID) {
    try {
        let {data, error} = await supabase
            .from('Models')
            .select('*')
            .eq('id', ID);
//        console.log(data);    
        if (error) throw error
        return await data;
    } catch (e) {
        throw e
    }
}

async function selectModels() {
    try {
        let {data, error} = await supabase
            .from('Models')
            .select('*');
//        console.log(data);    
        if (error) return error;
        return data;
    } catch (e) {
        return false;
    }
}

module.exports = {
    selectModel, selectModels
};