import EngineeringIcon from '@mui/icons-material/Engineering';

function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md transition-all duration-300">
            <div className="flex items-center justify-center gap-3 text-center text-xl md:text-2xl font-semibold">
                <EngineeringIcon className="text-orange-300" />
                Campus Fault Reporter
            </div>
        </header>
    );
}

export default Header;