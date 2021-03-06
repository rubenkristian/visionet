import { config } from "./config";

async function searchAsset(search) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();

    try {
        const response = await fetch(
            config.getUrlParams(
                `${config.endpoint}/searchasset`,
                {search: search}),
                reqconf)
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

async function stockInHistory() {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();
    
    try {
        const response = await fetch(`${config.endpoint}/liststockhistory/in`, reqconf)

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

async function stockOutHistory() {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();
    
    try {
        const response = await fetch(`${config.endpoint}/liststockhistory/out`, reqconf)

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

async function addStockInHistory(data) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig(data)

    try {
        const response = await fetch(`${config.endpoint}/submitstockhistory/in`, reqconf)
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

async function addStockOutHistory(data) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig(data)

    try {
        const response = await fetch(`${config.endpoint}/submitstockhistory/out`, reqconf)
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

async function removeStockIn(data) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig(data)

    try {
        const response = await fetch(`${config.endpoint}/deletestockhistory/in`, reqconf)
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

async function removeStockOut(data) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig(data)

    try {
        const response = await fetch(`${config.endpoint}/deletestockhistory/out`, reqconf)
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

async function submitListStockIn(data) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig(data)

    try {
        const response = await fetch(`${config.endpoint}/submitallstockhistory/in`, reqconf)
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

async function submitListStockOut(data) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig(data)

    try {
        const response = await fetch(`${config.endpoint}/submitallstockhistory/out`, reqconf)
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

async function tableInHistory({startdate, enddate}) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();
    
    try {
        const response = await fetch(
            config.getUrlParams(
                `${config.endpoint}/reportstockin`, 
                {startdate:startdate, enddate:enddate}), reqconf)

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

async function tableOutHistory({startdate, enddate}) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();
    
    try {
        const response = await fetch(
            config.getUrlParams(
                `${config.endpoint}/reportstockout`, 
                {startdate:startdate, enddate:enddate}), reqconf)

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

async function deleteStockOpname(data) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig(data)

    try {
        const response = await fetch(`${config.endpoint}/deletestockopname`, reqconf)
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

async function createStockOpname() {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig({})

    try {
        const response = await fetch(`${config.endpoint}/createstockopname`, reqconf)
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

async function insertStockOpname(data) {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig(data)

    try {
        const response = await fetch(`${config.endpoint}/insertstockopname`, reqconf)
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

async function listStockOpnameHistory({index, rows, search, sortby, sort}) {
    let result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();

    try {
        const response  = await fetch(
            config.getUrlParams(
                `${config.endpoint}/liststockopnamehistory`, 
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

async function listStockOpnameList({index, rows, search, sortby, sort}) {
    let result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();

    try {
        const response  = await fetch(
            config.getUrlParams(
                `${config.endpoint}/liststockopname`, 
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

async function checkStockOpnameHistory() {
    let result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();

    try {
        const response  = await fetch(
                `${config.endpoint}/checkstockopname`, 
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

async function submitListStock() {
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.postdataconfig({})

    try {
        const response = await fetch(`${config.endpoint}/submitstockopnamehistory`, reqconf)
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

async function tableStockOpname(data) {    
    const result = {
        json: null,
        err: null
    }

    let reqconf = config.getconfig();
    
    try {
        const response = await fetch(
            config.getUrlParams(
                `${config.endpoint}/reportstockin`, 
                data), reqconf)

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

export const stock = {
    stockInHistory,
    stockOutHistory,
    addStockInHistory,
    addStockOutHistory,
    removeStockIn,
    removeStockOut,
    submitListStockIn,
    submitListStockOut,
    searchAsset,
    tableInHistory,
    tableOutHistory,
    createStockOpname,
    listStockOpnameList,
    insertStockOpname,
    deleteStockOpname,
    submitListStock,
    checkStockOpnameHistory,
    listStockOpnameHistory
}