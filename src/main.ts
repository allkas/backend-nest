import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const configSwagger = new DocumentBuilder()
        .setTitle('Backend')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .build()
        const document = SwaggerModule.createDocument(app, configSwagger);
        SwaggerModule.setup('/api/docs', app, document);

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

start();