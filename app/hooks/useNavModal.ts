import { create } from 'zustand';

interface NavModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNavModal = create<NavModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set ({ isOpen: true }),
  onClose: () => set ({ isOpen: false }),
}))

export default useNavModal;