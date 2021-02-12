import create from "zustand";

const useStore = create((set) => ({
  data: "loading",
  loading: true,
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
  error: false,
  setError: (error) => set({ error }),
}));

export default useStore;
