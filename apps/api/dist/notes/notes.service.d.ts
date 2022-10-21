import { Prisma, Note } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.NoteCreateInput): Prisma.Prisma__NoteClient<Note, never>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNoteDto: UpdateNoteDto): string;
    remove(id: number): string;
}
