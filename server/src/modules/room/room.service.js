import Room from "./room.model";

export const createRoom = async (data) => {
    const room = await Room.create(data);
    return room;
}

export const getRoom = async () => {
    const room = await Room.find();
    return room;
};

export const UpdateRoom = async (id, data) => {
    const room = await Room.findByIdAndUpdate(id, data, { new: true });
    return room;
};

export const deletRoom = async (id) => {
    const room = await Room.findByIdAndDelete(id);
    return room;
}

