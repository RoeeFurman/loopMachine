
import { utilService } from "./utilService.js"

export default {
    query,
    getById,
    muteChannel
}

const layers = [
    {
        "_id": utilService.makeId(5),
        "name": "All Track",
        "fileURL": "ALL_TRACK.mp3",
        "isMuted": false,
        "color": '#763045',
    },
    {
        "_id": utilService.makeId(5),
        "name": "B Voc",
        "fileURL": "B_VOC.mp3",
        "isMuted": false,
        "color": '#994961',
    },
    {
        "_id": utilService.makeId(5),
        "name": "Drums",
        "fileURL": "DRUMS.mp3",
        "isMuted": false,
        "color": '#b85673',
    },
    {
        "_id": utilService.makeId(5),
        "name": "Tambourine shake",
        "fileURL": "tambourine_shake_higher.mp3",
        "isMuted": false,
        "color": '#dd6f90',
    },
    {
        "_id": utilService.makeId(5),
        "name": "He-He",
        "fileURL": "HE_HE_VOC.mp3",
        "isMuted": false,
        "color": '#f9a661',
    },
    {
        "_id": utilService.makeId(5),
        "name": "High Voc",
        "fileURL": "HIGH_VOC.mp3",
        "isMuted": false,
        "color": '#fd9843',
    },
    {
        "_id": utilService.makeId(5),
        "name": "Jibrish Voc",
        "fileURL": "JIBRISH.mp3",
        "isMuted": false,
        "color": '#e58635',
    },
    {
        "_id": utilService.makeId(5),
        "name": "Lead Voc",
        "fileURL": "LEAD_1.mp3",
        "isMuted": false,
        "color": '#d57c31',
    },
    {
        "_id": utilService.makeId(5),
        "name": "Uuho Voc",
        "fileURL": "UUHO_VOC.mp3",
        "isMuted": false,
        "color": '#c5712a',
    },

];

function muteChannel(id) {
    const currChannel = getById(id)
    currChannel.isMuted = !currChannel.isMuted
    return currChannel
}

function query() {
    return layers;
}

function getById(id) {
    return layers.find(layer => layer._id === id)
}

