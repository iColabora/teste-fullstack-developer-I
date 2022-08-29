import { Header } from './Header';
import { Footer } from './Footer';
import { Row } from './Row';

export function Table({ tasks, total, isLoading }) {
  return (
    <table>
      <Header />
      {isLoading ? (
        <tbody>
          <td className="py-4 text-center text-black"> Carregando...</td>
        </tbody>
      ) : (
        tasks?.map((task) => {
          return <Row key={task.tarefa} {...task} />;
        })
      )}

      <Footer {...total} />
    </table>
  );
}
