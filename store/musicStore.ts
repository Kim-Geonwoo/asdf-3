import { create } from "zustand";

interface MusicState {
  currentTrack: string;
  setCurrentTrack: (track: string) => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  currentTrack: "",
  setCurrentTrack: (track) => set({ currentTrack: track }),
}));