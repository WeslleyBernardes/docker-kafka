# Guia Prático de Apache Kafka com Docker

Este documento oferece um guia passo a passo para configurar e executar um ambiente básico do Apache Kafka usando Docker. Isso inclui a configuração de um broker Kafka e um Zookeeper.

## Pré-requisitos

Docker instalado em sua máquina.
Docker Compose (opcional, mas recomendado para facilitar a execução de múltiplos contêineres).

### Configuração

1. Criar um arquivo docker-compose.yml
Para simplificar a execução do Kafka e do Zookeeper, vamos usar o Docker Compose. Crie um arquivo docker-compose.yml no diretório do seu projeto com o seguinte conteúdo:

```yml
version: '2'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
```

2. Iniciar o Ambiente
No diretório onde o docker-compose.yml está localizado, execute o seguinte comando:

```
docker-compose up -d
```

3. Verificar se os Contêineres estão Rodando
Você pode verificar se os contêineres estão rodando com o seguinte comando:

```
docker-compose ps
```

