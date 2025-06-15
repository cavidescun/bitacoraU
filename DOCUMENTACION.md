## DOCUMENTACION DE PROYECTO

### BASE DE DATOS

A continuiacion se dara la sentencia para la creacion de la base de datos.


## Tablas de Catálogos

### Tabla `tipo_usuario`
```sql
CREATE TABLE IF NOT EXISTS tipo_usuario (
  idtipo_usuario INTEGER NOT NULL,
  type VARCHAR(45) NOT NULL,
  PRIMARY KEY (idtipo_usuario)
);
```

### Tabla `tipo_identificacion`
```sql
CREATE TABLE IF NOT EXISTS tipo_identificacion (
  idtipo_identificacion INTEGER NOT NULL,
  tipo_documento VARCHAR(45) NOT NULL,
  PRIMARY KEY (idtipo_identificacion)
);
```

### Tabla `tipo_sangre`
```sql
CREATE TABLE IF NOT EXISTS tipo_sangre (
  idtipo_sangre INTEGER NOT NULL,
  tipo VARCHAR(45) NOT NULL,
  PRIMARY KEY (idtipo_sangre)
);
```

### Tabla `sexo`
```sql
CREATE TABLE IF NOT EXISTS sexo (
  idsexo INTEGER NOT NULL,
  sexo_type VARCHAR(45) NOT NULL,
  PRIMARY KEY (idsexo)
);
```

### Tabla `tipo_participacion`
```sql
CREATE TABLE IF NOT EXISTS tipo_participacion (
  idtipo_participacion INTEGER NOT NULL,
  tipo_part VARCHAR(100) NOT NULL,
  PRIMARY KEY (idtipo_participacion)
);
```

## Tabla Principal de Usuarios

### Tabla `usuario`
```sql
CREATE TABLE IF NOT EXISTS usuario (
  identificacion VARCHAR(45) NOT NULL,
  nombres VARCHAR(45) NOT NULL,
  apellidos VARCHAR(45) NOT NULL,
  correo VARCHAR(45) NOT NULL,
  contraseña VARCHAR(255) NOT NULL,
  tipo_identificacion INTEGER NOT NULL,
  tipo_usuario INTEGER NOT NULL,
  consent BOOLEAN NOT NULL,
  created_at TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP(1) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (identificacion, tipo_identificacion, tipo_usuario),
  CONSTRAINT correo_unique UNIQUE (correo),
  CONSTRAINT identificacion_unique UNIQUE (identificacion),
  CONSTRAINT fk_usuarios_tipo_identificacion
    FOREIGN KEY (tipo_identificacion)
    REFERENCES tipo_identificacion (idtipo_identificacion)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT fk_usuarios_tipo_usuario1
    FOREIGN KEY (tipo_usuario)
    REFERENCES tipo_usuario (idtipo_usuario)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
);

-- Crear índices para las foreign keys
CREATE INDEX IF NOT EXISTS idx_usuarios_tipo_identificacion ON usuario (tipo_identificacion);
CREATE INDEX IF NOT EXISTS idx_usuarios_tipo_usuario ON usuario (tipo_usuario);
```

## Tablas de Información Personal

### Tabla `contacto_emergencia`
```sql
CREATE TABLE IF NOT EXISTS contacto_emergencia (
  idcontacto_emergencia INTEGER NOT NULL,
  nombres VARCHAR(45),
  apellidos VARCHAR(45),
  celular VARCHAR(45),
  ciudad_residencia VARCHAR(45),
  pais_residencia VARCHAR(45),
  PRIMARY KEY (idcontacto_emergencia)
);
```

### Tabla `personal_info`
```sql
CREATE TABLE IF NOT EXISTS personal_info (
  idpersonal_info INTEGER NOT NULL,
  fecha_nacimiento DATE,
  ciudad_residencia VARCHAR(45),
  ciudad_nacimiento VARCHAR(45),
  pais_residencia VARCHAR(45),
  eps VARCHAR(45),
  arl VARCHAR(45),
  celular VARCHAR(45),
  direccion_residencia VARCHAR(45),
  usuario_identificacion VARCHAR(45) NOT NULL,
  contacto_emergencia INTEGER NOT NULL,
  tipo_sangre INTEGER NOT NULL,
  url_imagen TEXT,
  PRIMARY KEY (idpersonal_info, usuario_identificacion, contacto_emergencia, tipo_sangre),
  CONSTRAINT fk_personal_info_usuario1
    FOREIGN KEY (usuario_identificacion)
    REFERENCES usuario (identificacion)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT fk_personal_info_contacto_emergencia1
    FOREIGN KEY (contacto_emergencia)
    REFERENCES contacto_emergencia (idcontacto_emergencia)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT fk_personal_info_tipo_sangre1
    FOREIGN KEY (tipo_sangre)
    REFERENCES tipo_sangre (idtipo_sangre)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
);

CREATE INDEX IF NOT EXISTS idx_personal_info_usuario ON personal_info (usuario_identificacion);
CREATE INDEX IF NOT EXISTS idx_personal_info_contacto_emergencia ON personal_info (contacto_emergencia);
CREATE INDEX IF NOT EXISTS idx_personal_info_tipo_sangre ON personal_info (tipo_sangre);
```

## Tablas Académicas

### Tabla `educacion_continuada`
```sql
CREATE TABLE IF NOT EXISTS educacion_continuada (
  idEstudio INTEGER NOT NULL,
  tipo_estudio VARCHAR(45) NOT NULL,
  nombre_estudio VARCHAR(45) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  universidad VARCHAR(100) NOT NULL,
  ciudad VARCHAR(100) NOT NULL,
  Pais VARCHAR(100) NOT NULL,
  usuarios_identificacion VARCHAR(45) NOT NULL,
  PRIMARY KEY (idEstudio, usuarios_identificacion),
  CONSTRAINT fk_educacion_continuada_usuarios1
    FOREIGN KEY (usuarios_identificacion)
    REFERENCES usuario (identificacion)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
);

CREATE INDEX IF NOT EXISTS idx_educacion_continuada_usuarios ON educacion_continuada (usuarios_identificacion);
```

### Tabla `articulos_cientifico`
```sql
CREATE TABLE IF NOT EXISTS articulos_cientifico (
  idarticulos_cientifico INTEGER NOT NULL,
  titulo_publicacion TEXT NOT NULL,
  Autores TEXT NOT NULL,
  revista VARCHAR(200) NOT NULL,
  ciudad VARCHAR(100) NOT NULL,
  ano_publicacion VARCHAR(100) NOT NULL,
  usuarios_identificacion VARCHAR(45) NOT NULL,
  PRIMARY KEY (idarticulos_cientifico, usuarios_identificacion),
  CONSTRAINT fk_articulos_cientifico_usuarios1
    FOREIGN KEY (usuarios_identificacion)
    REFERENCES usuario (identificacion)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
);

CREATE INDEX IF NOT EXISTS idx_articulos_cientifico_usuarios ON articulos_cientifico (usuarios_identificacion);
```

## Tablas Médicas

### Tabla `CUPS`
```sql
CREATE TABLE IF NOT EXISTS CUPS (
  idCUPS INTEGER NOT NULL,
  procedimiento VARCHAR(45) NOT NULL,
  PRIMARY KEY (idCUPS)
);
```

### Tabla `CIE10`
```sql
CREATE TABLE IF NOT EXISTS CIE10 (
  idCIE10 INTEGER NOT NULL,
  procedimiento VARCHAR(45) NOT NULL,
  PRIMARY KEY (idCIE10)
);
```

### Tabla `datos_paciente`
```sql
CREATE TABLE IF NOT EXISTS datos_paciente (
  idpaciente INTEGER NOT NULL,
  edad INTEGER NOT NULL,
  tipo_identificacion INTEGER NOT NULL,
  sexo_idsexo INTEGER NOT NULL,
  identificacion_paciente VARCHAR(45) NOT NULL,
  PRIMARY KEY (idpaciente, tipo_identificacion, sexo_idsexo),
  CONSTRAINT fk_datos_paciente_tipo_identificacion1
    FOREIGN KEY (tipo_identificacion)
    REFERENCES tipo_identificacion (idtipo_identificacion)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT fk_datos_paciente_sexo1
    FOREIGN KEY (sexo_idsexo)
    REFERENCES sexo (idsexo)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
);

CREATE INDEX IF NOT EXISTS idx_datos_paciente_tipo_identificacion ON datos_paciente (tipo_identificacion);
CREATE INDEX IF NOT EXISTS idx_datos_paciente_sexo ON datos_paciente (sexo_idsexo);
```

## Tabla Principal de Registros

### Tabla `bitacora`
```sql
CREATE TABLE IF NOT EXISTS bitacora (
  idbitacora INTEGER NOT NULL,
  comentarios TEXT,
  CUPS_idCUPS INTEGER NOT NULL,
  CIE10_idCIE10 INTEGER NOT NULL,
  cantidad_proced INTEGER NOT NULL,
  datos_paciente_idpaciente INTEGER NOT NULL,
  id_docente INTEGER NOT NULL,
  fecha_participacion DATE NOT NULL,
  centro_rotacion VARCHAR(250) NOT NULL,
  tipo_participacion INTEGER NOT NULL,
  PRIMARY KEY (idbitacora, CUPS_idCUPS, CIE10_idCIE10, datos_paciente_idpaciente, tipo_participacion),
  CONSTRAINT fk_bitacora_CUPS1
    FOREIGN KEY (CUPS_idCUPS)
    REFERENCES CUPS (idCUPS)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT fk_bitacora_CIE101
    FOREIGN KEY (CIE10_idCIE10)
    REFERENCES CIE10 (idCIE10)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT fk_bitacora_datos_paciente1
    FOREIGN KEY (datos_paciente_idpaciente)
    REFERENCES datos_paciente (idpaciente)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT fk_bitacora_tipo_participacion1
    FOREIGN KEY (tipo_participacion)
    REFERENCES tipo_participacion (idtipo_participacion)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
);

CREATE INDEX IF NOT EXISTS idx_bitacora_CUPS ON bitacora (CUPS_idCUPS);
CREATE INDEX IF NOT EXISTS idx_bitacora_CIE10 ON bitacora (CIE10_idCIE10);
CREATE INDEX IF NOT EXISTS idx_bitacora_datos_paciente ON bitacora (datos_paciente_idpaciente);
CREATE INDEX IF NOT EXISTS idx_bitacora_tipo_participacion ON bitacora (tipo_participacion);
```

---
