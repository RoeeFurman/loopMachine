
import { utilService } from "./utilService.js"

export default {
    query,
    getById,
    // remove,
    // save,
    // updateItem,
    // getEmptyItem,
    muteChannel
}

const items = [
    {
        "_id": utilService.makeId(5),
        "name": "All Track",
        "fileURL": "ALL_TRACK.mp3",
        "isMuted": false,
        "color": '#ff77a0',
    },
    {
        "_id": utilService.makeId(5),
        "name": "B Voc",
        "fileURL": "B_VOC.mp3",
        "isMuted": false
    },
    {
        "_id": utilService.makeId(5),
        "name": "Drums",
        "fileURL": "DRUMS.mp3",
        "isMuted": false
    },
    {
        "_id": utilService.makeId(5),
        "name": "Tambourine shake",
        "fileURL": "_tambourine_shake_higher.mp3",
        "isMuted": false
    },
    {
        "_id": utilService.makeId(5),
        "name": "HE HE VOC",
        "fileURL": "HE_HE_VOC.mp3",
        "isMuted": false
    },
    {
        "_id": utilService.makeId(5),
        "name": "HIGH_VOC",
        "fileURL": "HIGH_VOC.mp3",
        "isMuted": false
    },
    {
        "_id": utilService.makeId(5),
        "name": "JIBRISH",
        "fileURL": "JIBRISH.mp3",
        "isMuted": false
    },
    {
        "_id": utilService.makeId(5),
        "name": "LEAD_1",
        "fileURL": "LEAD_1.mp3",
        "isMuted": false
    },
    {
        "_id": utilService.makeId(5),
        "name": "UUHO_VOC",
        "fileURL": "UUHO_VOC.mp3",
        "isMuted": false
    },

];

function muteChannel(id) {
    const currChannel = getById(id)
    currChannel.isMuted = !currChannel.isMuted
    return currChannel
}

function query() {
    return items;
}

function getById(id) {
    return items.find(item => item._id === id)
}

// async function muteChannel(id) {
//     const currChannel = await getById(id)
//     currChannel.isMuted = !currChannel.isMuted
//     return currChannel
// }

// function query(filterBy = null) {
//     return new Promise((resolve, reject) => {
//         var itemsToReturn = items;
//         if (filterBy && filterBy.term) {
//             itemsToReturn = filter(filterBy.term)
//         }
//         resolve(sort(itemsToReturn))
//     })
// }

// function getById(id) {
//     return new Promise((resolve, reject) => {
//         const item = items.find(item => item._id === id)
//         item ? resolve(item) : reject(`Item id ${id} not found!`)
//     })
// }

// function remove(id) {
//     return new Promise((resolve, reject) => {
//         const index = items.findIndex(item => item._id === id)
//         if (index !== -1) {
//             items.splice(index, 1)
//         }

//         resolve(items)
//     })
// }

// function updateItem(item) {
//     return new Promise((resolve, reject) => {
//         const index = items.findIndex(c => item._id === c._id)
//         if (index !== -1) {
//             items[index] = item
//         }
//         resolve(item)
//     })
// }

// function _addItem(item) {
//     return new Promise((resolve, reject) => {
//         item._id = _makeId()
//         items.push(item)
//         resolve(item)
//     })
// }

// function save(item) {
//     return item._id ? _updateItem(item) : _addItem(item)
// }


function filter(term) {
    term = term.toLocaleLowerCase()
    return items.filter(item => {
        return item.name.toLocaleLowerCase().includes(term) ||
            item.phone.toLocaleLowerCase().includes(term) ||
            item.email.toLocaleLowerCase().includes(term)
    })
}



function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}
