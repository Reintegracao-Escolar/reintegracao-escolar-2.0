import React from 'react';
import { Button, Container, Form, Row, Col, InputGroup, Nav } from 'react-bootstrap'
import '../css/Cadastro.css'
import { IMaskInput } from 'react-imask';

export default function Cadastro() {

  return (
    <Container fluid id='cadastro'>
      <Form className='formCadastro mb-3'>
        <Row>
          <Form.Group as={Col} md="6" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Nome Completo" />
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>Você é?</Form.Label>
            <Form.Select>
              <option selected style={{ display: "none" }}>Escolha</option>
              <option>Estudante</option>
              <option>Professor</option>
              <option>Parceiro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>Telefone</Form.Label>
            <Form.Control type="tel"
              as={IMaskInput}
              mask="(00) 0.0000-0000"
              placeholder='(00) 0.0000-0000' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="6" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>E-mail</Form.Label>
            <Form.Control type="email" placeholder="usuario@empresa.com" />
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>Crie uma senha</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>Repita a senha</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="5" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>Endereço</Form.Label>
            <Form.Control type="email" placeholder="Av. Dantas Barreto, 254" />
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>Cidade</Form.Label>
            <Form.Control type="email" placeholder="Recife" />
          </Form.Group>

          <Form.Group as={Col} md="2" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>Estado</Form.Label>
            <Form.Select>
              <option selected style={{ display: "none" }}>Escolha</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espirito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MT">Mato Grosso</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="2" className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-light'>CEP</Form.Label>
            <Form.Control type="text"
              as={IMaskInput}
              mask="00000-000"
              placeholder='00000-000' />
          </Form.Group>
        </Row>

        <hr style={{ border: "1px dotted white" }} />

        <h5 className='text-center text-light mb-4'>O que você está buscando?</h5>

        <Row>
          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <div className='form-check mb-3'>
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label text-light">Aula de reforço</label>
            </div>
            <div className='form-check'>
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label text-light">Aula interativa</label>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <div className='form-check mb-3'>
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label text-light">Aprenda jogando</label>
            </div>
            <div className='form-check'>
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label text-light">Falta de motivação</label>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <div className='form-check mb-3'>
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label text-light">Evasão escolar</label>
            </div>
            <div className='form-check'>
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label text-light">Empresas</label>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
            <div className='form-check mb-3'>
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label text-light">Incentivar alunos</label>
            </div>
            <div className='form-check'>
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label text-light">Ongs</label>
            </div>
          </Form.Group>
        </Row>

        <hr style={{ border: "1px dotted white" }} />

        <Form.Group className="mb-3">
          <div className='form-check'>
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label text-light">
              Concordo com os <a href='#'>
                Termos de uso e Política de privacidade
              </a>
            </label>
          </div>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type='submit' size='lg'>
            Entrar
          </Button>
        </div>
      </Form>
    </Container>
  )
}
