const supabase = require('../configs/connection'); //already required

async function insertModel(Name, info, username, Path) {
    try {
        let date = Date.now();
        let {data, error} = await supabase
            .from('Models')
            .insert([
                {ModelName: Name, Viewings: 0, Info: info, 
                    username: username, Model: Path},
            ]);
        console.log(data);    
        if (error) return error;
        return data;
    } catch (e) {
        return false;
    }
}

module.exports = {
    insertModel
};