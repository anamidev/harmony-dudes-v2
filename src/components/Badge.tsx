export default function Badge({ isVisible }: { isVisible: boolean }) {
    return isVisible ? (
        <div className="absolute right-0 rounded-2xl bg-emerald-500/[0.5] px-4 font-bold uppercase">
            Open
        </div>
    ) : null;
}
