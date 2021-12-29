package csci310.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PGDRepository extends JpaRepository<PGD, Long> {
    Optional<PGD> findById(long id);
    Boolean existsById(long id);
}