import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(createNoteDto: CreateNoteDto): import(".prisma/client").Prisma.Prisma__NoteClient<import(".prisma/client").Note, never>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNoteDto: UpdateNoteDto): string;
    remove(id: string): string;
}
