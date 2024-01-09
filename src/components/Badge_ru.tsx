export default function Badge({ isVisible }: { isVisible: boolean }) {
    return isVisible ? (
        <div className="absolute right-0 rounded-2xl bg-emerald-600/[1] px-4 py-2 font-bold uppercase">
            Набор
        </div>
    ) : null;
}
