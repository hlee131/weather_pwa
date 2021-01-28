export default function epochToHuman(time, offset) {
    return new Date((time + offset) * 1000).getUTCHours()
}
