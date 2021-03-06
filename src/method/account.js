import {config} from './config'

async function updatePassword(type, data) {
    let result = {
        json: null,
        err: null
    }
    
    let reqconf = config.postdataconfig(data);

    try{
        const response = await fetch(`${config.endpoint}/changepassword/${type}`, reqconf)
        const fetchres = await response.json()

        if(response.status === 200) {
            if(fetchres.status) {
                result.json = fetchres
            } else {
                result.err = fetchres.msg
            }
        } else {
            result.err = response.statusText
        }
    } catch(err) {
        result.err = err
    }

    return result
}

async function getProfile(type, id) {
    let result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();

    try {
        const response  = await fetch(
            config.getUrlParams(
                `${config.endpoint}/getprofile/${type}/${id}`, 
                {}), 
                reqconf)
        const fetchres  = await response.json()
        
        if(response.status === 200) {
            if(fetchres.status) {
                result.json = fetchres
            } else {
                result.err = fetchres.msg
            }
        } else {
            result.err = response.statusText
        }
    } catch(err) {
        result.err = err
    }

    return result
}

async function submit(type,data) {
    let result = {
        json: null,
        err: null
    }
    
    let reqconf = config.postdataconfig(data);

    try{
        const response = await fetch(`${config.endpoint}/insert/${type}`, reqconf)
        const fetchres = await response.json()

        if(response.status === 200) {
            if(fetchres.status) {
                result.json = fetchres
            } else {
                result.err = fetchres.msg
            }
        } else {
            result.err = response.statusText
        }
    } catch(err) {
        result.err = err
    }

    return result
}

async function update(type, data) {
    let result = {
        json: null,
        err: null
    }
    
    let reqconf = config.postdataconfig(data);

    try{
        const response = await fetch(`${config.endpoint}/edit/${type}`, reqconf)
        const fetchres = await response.json()

        if(response.status === 200) {
            if(fetchres.status) {
                result.json = fetchres
            } else {
                result.err = fetchres.msg
            }
        } else {
            result.err = response.statusText
        }
    } catch(err) {
        result.err = err
    }

    return result
}

async function del(type, id) {
    let result = {
        json: null,
        err: null
    }
    
    let reqconf = config.postdataconfig({id: id});

    try{
        const response = await fetch(`${config.endpoint}/delete/${type}`, reqconf)
        const fetchres = await response.json()

        if(response.status === 200) {
            if(fetchres.status) {
                result.json = fetchres
            } else {
                result.err = fetchres.msg
            }
        } else {
            result.err = response.statusText
        }
    } catch(err) {
        result.err = err
    }

    return result
}

async function list(path,{index, rows, search, sortby, sort}) {
    let result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();

    try {
        const response  = await fetch(
            config.getUrlParams(
                `${config.endpoint}/list/${path}`, 
                {page: index, search: search, sortby: sortby, sort: sort, rows: rows}), 
                reqconf)
        const fetchres  = await response.json()
        
        if(response.status === 200) {
            if(fetchres.status) {
                result.json = fetchres
            } else {
                result.err = fetchres.msg
            }
        } else {
            result.err = response.statusText
        }
    } catch(err) {
        result.err = err
    }

    return result
}

async function searchLight(path, search) {
    let result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();

    try {
        const response  = await fetch(
            config.getUrlParams(
                `${config.endpoint}/light/${path}`, 
                {search: search}), 
                reqconf)
        const fetchres  = await response.json()
        
        if(response.status === 200) {
            if(fetchres.status) {
                result.json = fetchres
            } else {
                result.err = fetchres.msg
            }
        } else {
            result.err = response.statusText
        }
    } catch(err) {
        result.err = err
    }

    return result
}

export const account = {
    updatePassword,
    getProfile,
    list,
    submit,
    update,
    del,
    searchLight
}