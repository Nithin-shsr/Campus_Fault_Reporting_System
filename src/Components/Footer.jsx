function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center text-sm text-gray-600 py-4 mt-8">
            © {year} Snap2Fix. All rights reserved.
        </footer>
    );
}

export default Footer;