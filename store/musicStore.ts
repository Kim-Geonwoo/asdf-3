import { create } from "zustand";

interface MusicState {
  currentTrack: string;
  setCurrentTrack: (track: string) => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  currentTrack: "summerdance",
  setCurrentTrack: (track) => set({ currentTrack: track }),
}));