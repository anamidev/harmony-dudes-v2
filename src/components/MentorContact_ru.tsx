import { ContactType, IContact } from '@/lib/data/mentors';
import Link from 'next/link';
import { FaTelegram, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import EmailToClipboard_ru from './EmailToClipboard_ru';

export default function MentorContact({ contact }: { contact: IContact }) {
    return contact.type === ContactType.email ? (
        <EmailToClipboard_ru
            email={contact.href}
            classStyle="button-sm-purple flex items-center gap-1"
        >
            <MdEmail className="h-5 w-5" />
            {contact.type}
        </EmailToClipboard_ru>
    ) : (
        <Link
            href={contact.href}
            className="button-sm-orange flex items-center gap-1"
        >
            {contact.type === ContactType.telegram ? <FaTelegram /> : null}
            {contact.type === ContactType.linkedin ? <FaLinkedin /> : null}
            {contact.type}
        </Link>
    );
}
