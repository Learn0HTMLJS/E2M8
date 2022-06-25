const supabase = require('../configs/connection');

async function DeletePicture(ID) {
    try {
        let {data, error} = await supabase
            .from('Pictures')
            .delete()
            .eq('Model_ID', ID);
//        console.log(data);    
        if (error) throw error
        return await data;
    } catch (e) {
        throw e
    }
}

module.exports = {
    DeletePicture
};