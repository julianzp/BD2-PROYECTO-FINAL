import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Cliente {

  @Prop()
  id: string;

  @Prop()
  nombres: string;

  @Prop()
  apellidos: string;

  @Prop()
  direccion: string;

  @Prop()
  fechaNacimiento: string;

  @Prop()
  correo: string;

  @Prop()
  telefonoCasa: string;

  @Prop()
  celular: string;

}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);