const requestURL = 'http://localhost:8080' //url бэка

function getRequest(url){ // общая функция GET запроса
    const xhr = new XMLHttpRequest()
    let data = []
    xhr.open('GET', url)
    xhr.onload = function (){
        console.log(xhr.status)
        if(xhr.status==400){
            data = JSON.parse(xhr.response)
        }
    }
    xhr.send()
    return data
}

function postRequest(url){ // общая функция POST запроса
    const xhr = new XMLHttpRequest()
    let data = []
    xhr.open('POST', url)
    xhr.setRequestHeader('', '')
    xhr.onload = function (){
        console.log(xhr.status)
        if(xhr.status==400){
            data = JSON.parse(xhr.response)
        }
    }
    xhr.send()
    return data
}

function deleteRequest(url){ // общая функция DELETE запроса
    const xhr = new XMLHttpRequest()
    let data = []
    xhr.open('DELETE', url)
    xhr.setRequestHeader('', '') // что-то сюда вставить
    xhr.onload = function (){
        console.log(xhr.status)
        if(xhr.status==400){
            data = JSON.parse(xhr.response)
        }
    }
    xhr.send()
    return data
}