export declare interface Creator {
    _id: string;
    username: string;
    profilePicUrl: string;
}

export declare interface SceneMember extends Creator {
    permissions: string[];
}
export type SceneData = {
    _id: string;
    coverPhoto: string;
    title: string;
    creator: Creator;
    sceneMembers: SceneMember[];
    usersCount: number;
    createdAt: Date;
    start: Date;
    end: Date;
};
