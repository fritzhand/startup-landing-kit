import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';

export function Footer() {
    return (
        <footer className="border-t bg-white">
            <Container>
                <div className="py-12 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {config.footer.socials.map((item) => (
                            <a key={item.platform} href={item.href} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{item.platform}</span>
                                {/* Icons would go here, maybe generic or mapped */}
                                <span>{item.platform}</span>
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-gray-500">
                            {config.footer.copyright}
                        </p>
                        <div className="mt-2 flex justify-center space-x-4 text-xs text-gray-500">
                            {config.footer.links.map((link) => (
                                <a key={link.label} href={link.href} className="hover:underline">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
